export const getIncubatorDataById = async (userId) => {
    try {
      const response = await fetch(`https://vzxn4xkt-4000.use2.devtunnels.ms/incubadora/getbyIdIncubadora?idUser=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de la incubadora.');
      }
  
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API: ' + error.message);
    }
  };
  