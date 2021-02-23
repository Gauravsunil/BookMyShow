using AutoMapper;
using AutoMapper.Configuration;
using SimpleInjector;
using System;
namespace BookMyShow
{
    public class MapperProvider
    {
        private readonly Container _container;

        public MapperProvider(Container container)
        {
            _container = container;
        }

        public IMapper GetMapper()
        {
            var mapperConfigurationExpression = new MapperConfigurationExpression();
            mapperConfigurationExpression.ConstructServicesUsing(_container.GetInstance);

            mapperConfigurationExpression.AddMaps(typeof(AutoMapperProfile).Assembly);

            var mapperConfiguration = new MapperConfiguration(mapperConfigurationExpression);
            mapperConfiguration.AssertConfigurationIsValid();

            IMapper m = new Mapper(mapperConfiguration, t => _container.GetInstance(t));

            return m;
        }
    }
}
