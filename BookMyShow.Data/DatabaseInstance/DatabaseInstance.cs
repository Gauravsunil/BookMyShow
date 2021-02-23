using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Microsoft.Extensions.Configuration;
using Dapper;
using Dapper.Contrib.Extensions;

namespace BookMyShow.Data
{
   public class DatabaseInstance:IDatabaseInstance
    {
        private PetaPoco.Database PetaPocoDb;
        private IDbConnection DapperDb;

        public DatabaseInstance(IConfiguration configuration)
        {
            this.DapperDb = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            this.PetaPocoDb = new PetaPoco.Database(configuration.GetConnectionString("DefaultConnection"), "System.Data.SqlClient");
        }

        public int Create<T>(bool useDapperORM,T data) where T : class
        {
            return (useDapperORM) ? (int)this.DapperDb.Insert(data) : (int)this.PetaPocoDb.Insert(data);
        }

        public IEnumerable<T> ReadAll<T>(bool useDapperORM,string query="") where T : class
        {
            return (useDapperORM ) ? this.DapperDb.GetAll<T>():this.PetaPocoDb.Query<T>(query);
        }


        public T Read<T>(bool useDapperORM,int id,string query="")where T:class
        {
            return (useDapperORM) ? this.DapperDb.Get<T>(id) : this.PetaPocoDb.Single<T>(query);
        }

        public IEnumerable<T> Update<T>(bool useDapperORM,string query = "")
        {
             return useDapperORM ? this.DapperDb.Query<T>(query) : this.PetaPocoDb.Query<T>(query);
        }

        public bool Delete<T>(bool useDapperORM,T data)where T:class
        {
            return (useDapperORM)?this.DapperDb.Delete<T>(data):(this.PetaPocoDb.Delete<T>(data)!=0)?true:false;
            
        }
    }
}
