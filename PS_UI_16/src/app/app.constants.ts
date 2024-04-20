export class AppConstants {
    public static readonly web_api_url = 'https://localhost:44390/';

    public static readonly student_web_api_url = this.web_api_url + "user/";
    public static readonly classes_web_api_url = this.web_api_url + "class/";
    public static readonly userEnrollments_web_api_url = this.web_api_url + "userenrollment/";
    public static readonly login_web_api_url = this.web_api_url + "userlogin/";
}
