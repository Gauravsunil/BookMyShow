using System;
using System.Collections.Generic;
using System.Text;

namespace BookMyShow.Data
{
    public interface IDatabaseInstance
    {
        int Create<T>(bool useDapperORM, T data) where T : class;
        IEnumerable<T> ReadAll<T>(bool useDapperORM,string query = "") where T : class;
        T Read<T>(bool useDapperORM, int id,string query="") where T : class;

        IEnumerable<T> Update<T>(bool useDapperORM,string query = "");
        bool Delete<T>(bool useDapperORM, T data) where T : class;

    }
}
