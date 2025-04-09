import { Tabs } from '@chakra-ui/react';
import { ButtonAntd } from '../Button/ButtonAntD';
import { RatingMui } from '../Rating/RatingMui';
import { DatePickerMantine } from '../Calendar/DatePickerMantine';
import './TabsChakra.css';

export const TabsChakra = () => {
    return (
        <div className='box'>
            <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab1"} className="root">
                <Tabs.List className="list">
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="tab1" className="content">
                    <ButtonAntd />
                </Tabs.Content>
                <Tabs.Content value="tab2" className="content">
                    <DatePickerMantine />
                </Tabs.Content>
                <Tabs.Content value="tab3" className="content">
                    <RatingMui />
                </Tabs.Content>
            </Tabs.Root>
        </div>
      );
};