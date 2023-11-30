export const updateVentilador = async (valor, idIncubadora) => {
    try {
      const response = await fetch('https://vzxn4xkt-4000.use2.devtunnels.ms/incubadora/actualizarVentilador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          valor: valor,
          idIncubadora: idIncubadora,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el ventilador en la API');
      }
  
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      throw new Error('Error en la llamada a la API de controles: ' + error.message);
    }
  };
  