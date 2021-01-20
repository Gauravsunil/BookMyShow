using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShow.Models.DataModels
{
    public class Authentication
    {
        public class Signin
        {
            
            public string UserName { get; set; }

            public string Password { get; set; }
        }
        public class Signup
        {
            
            public string UserName { get; set; }

            public string Email { get; set; }
            
            public string Password { get; set; }
            public string Role { get; set; }
        }
    }
}
