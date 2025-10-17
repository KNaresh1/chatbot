import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.tsx';

function App() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
   }, []);

   return (
      <div className="p-4">
         <p className="font-bold text-3xl pb-4">{message}</p>
         <Button>Click Me</Button>
      </div>
   );
}

export default App;
