import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      // Obtener el código de la URL de la consulta
      const code = router.query.code as string;
      if (code) {
        // Hacer la petición POST con el cédigo
        const response = await fetch('/api/save-credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        // Verificar el estado de la respuesta
        if (response.ok) {
          // Obtener las credenciales del cuerpo de la respuesta
          const credentials = await response.json();

          // Guardar las credenciales en sessionStorage
          sessionStorage.setItem('credentials', JSON.stringify(credentials));

          // Redirigir a la página principal u otra página de tu elección
          router.push('/');
        } else {
          // Manejar el error en caso de que la petición no sea exitosa
          console.error('Error al guardar las credenciales');
          // Redirigir a una página de error u otra página de tu elección
          // router.push('/error');
        }
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="grid h-screen w-screen content-center justify-center bg-slate-800">
      <h1>Procesando...</h1>
    </div>
  );
};

export default CallbackPage;
