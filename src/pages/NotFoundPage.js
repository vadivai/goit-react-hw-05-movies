import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const set = setTimeout(() => {
      setCounter(prev => prev - 1);
    }, 1000);
    if (counter === 0) {
      navigate('/');
    }
    return () => clearTimeout(set);
  }, [counter, navigate]);

  return (
    <div>
      <p>This URL is not found.</p>
      <p>
        You will be navigated to page "Home" in <span>{counter}</span> sec.
      </p>
    </div>
  );
}
