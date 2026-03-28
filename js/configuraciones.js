const CONFIG = (() => {
  const hostname = window.location.hostname;

  // Producción
  if (hostname === 'restaurantes.atiendelos.com' || hostname === 'restaurantes.atiendelos.com') {
    return {
      ENV: 'production',
      URL_CLIENTES: 'https://clientesatiendelos-183036175359.northamerica-south1.run.app',
      URL_ATIENDELOSV2: 'https://black-plant-0a3faca0f.1.azurestaticapps.net',
      URL_ATIENDELOSV1: 'http://localhost:8100'
    };
  }

  if (hostname.includes("github")) {
    return {
      ENV: 'development',
      URL_CLIENTES: 'https://clientesatiendelos-183036175359.northamerica-south1.run.app',
      URL_ATIENDELOSV2: 'https://black-plant-0a3faca0f.1.azurestaticapps.net',
      URL_ATIENDELOSV1: 'http://localhost:8100'
    };
  }



  // Desarrollo (localhost)
  return {
    ENV: 'development',
    URL_CLIENTES: 'https://clientesatiendelos-183036175359.northamerica-south1.run.app',
    URL_ATIENDELOSV2: 'https://black-plant-0a3faca0f.1.azurestaticapps.net',
    URL_ATIENDELOSV1: 'http://localhost:8100'
  };
})();
