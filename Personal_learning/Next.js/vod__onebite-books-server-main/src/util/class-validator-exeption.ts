import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class ClassValidatorException extends BadRequestException {
  private formatedErrors: {
    property: string;
    errors: { [key: string]: string };
  }[];

  constructor(public validationErrors: ValidationError[]) {
    super();
    this.formatedErrors = validationErrors.map((error) => ({
      property: error.property,
      errors: error.constraints,
    }));
  }

  getResponse() {
    console.log(this.formatedErrors);

    const messages = this.formatedErrors.reduce((acc, { property, errors }) => {
      Object.entries(errors).forEach(([errorType, errorMessage]) => {
        if (errorType === "isCustomUrl") acc.push(errorMessage);
        else if (errorType === "isNonEmptyString") acc.push(errorMessage);
        else {
          acc.push(`${property}는 요청에 포함되지 않아야 합니다.`);
        }
      });

      return acc;
    }, []);

    return {
      statusCode: 400,
      message: messages.join(", "),
      error: "Bad Request",
    };
  }
}
