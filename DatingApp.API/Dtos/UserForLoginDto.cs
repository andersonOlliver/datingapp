namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        public string Password { get; set; }

        private string _username;
        public string Username
        {
            get { return _username; }
            set { _username = value.ToLower(); }
        }

    }
}