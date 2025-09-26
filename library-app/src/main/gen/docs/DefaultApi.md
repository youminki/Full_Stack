# DefaultApi

All URIs are relative to *https://library_app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTwoNumbers**](DefaultApi.md#addTwoNumbers) | **GET** /add | GET add |


<a id="addTwoNumbers"></a>
# **addTwoNumbers**
> Integer addTwoNumbers(number1, number2)

GET add

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://library_app");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Integer number1 = 56; // Integer | 
    Integer number2 = 56; // Integer | 
    try {
      Integer result = apiInstance.addTwoNumbers(number1, number2);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#addTwoNumbers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **number1** | **Integer**|  | |
| **number2** | **Integer**|  | |

### Return type

**Integer**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

