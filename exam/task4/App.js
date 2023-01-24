import { View } from 'react-native';
import { useState } from 'react';

function App() {
  const [state, setColor] = useState(0);
  const handleClick = () => {
    setColor(!state);
  };

  return (
    <View>
      <button
        onClick={handleClick}
        style={{ backgroundColor: state ? '#ff3b6f' : '#fff333' }}>
        Click here
      </button>
    </View>
  );
}

export default App;
