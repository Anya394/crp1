import { Tabs } from '@chakra-ui/react';
import { ButtonAntd } from '../Button/ButtonAntD';
import { RatingMui } from '../Rating/RatingMui';
import { DatePickerMantine } from '../Calendar/DatePickerMantine';
import { ModalRadix } from "../Modal/ModalRadix";
import './TabsChakra.css';
import { useState } from 'react';

export const TabsChakra = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='box'>
            <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab1"} className="root" >
                <Tabs.List className="list">
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                    <Tabs.Trigger value="tab4">Tab 4</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="tab1" className="content">
                    <ButtonAntd text="Нажми меня"/>
                </Tabs.Content>
                <Tabs.Content value="tab2" className="content">
                    <DatePickerMantine />
                </Tabs.Content>
                <Tabs.Content value="tab3" className="content">
                    <RatingMui />
                </Tabs.Content>
                <Tabs.Content value="tab4" className="content">
                    <ModalRadix 
                    />
                </Tabs.Content>
            </Tabs.Root>
        </div>
      );
};