import { Host, Picker } from '@expo/ui/swift-ui';
import React from 'react';

const IndexPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
   <Host style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Picker
    options={['$', '$$', '$$$', '$$$$']}
    selectedIndex={selectedIndex}
    onOptionSelected={({ nativeEvent: { index } }) => {
      setSelectedIndex(index);
      console.log(`Selected index: ${index}`);
    }}
    variant="segmented"
  />
   </Host>
  )
}

export default IndexPage