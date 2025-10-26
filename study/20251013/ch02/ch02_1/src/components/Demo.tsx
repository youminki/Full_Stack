import * as D from "../data";

// export default function Demo() {
const Demo = () => {
    const children = D.makeArray(10).map((notUsed, index) => (
        <div key={index}>
            <p>{D.randomId()}</p>
            <p>{D.randomName()}</p>
            <p>{D.randomJobTitle()}</p>
            <p>{D.randomSentence()}</p>
            <img src = {D.randomAvatar()} width={50} height={50} alt="avatar" />
            
        </div>
    ));

  return (
    <>
      <h1>Demo</h1>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} width={100} height={100} alt="avatar" />
      <img src={D.randomImage()} width={100} height={100} alt="random image" />
      {}

    </>
  );
}

export default Demo;