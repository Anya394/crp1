import { Tabs } from '@chakra-ui/react';
import { ButtonAntd } from '../Button/ButtonAntD';
import { RatingMui } from '../Rating/RatingMui';

export const TabsChakra = () => {
    return (
        <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab1"}>
            <Tabs.List>
                <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="tab1">
                <ButtonAntd />
            </Tabs.Content>
            <Tabs.Content value="tab2">
                <p>Content for Tab 2</p>
            </Tabs.Content>
            <Tabs.Content value="tab3">
                <RatingMui />
            </Tabs.Content>
        </Tabs.Root>
      );
};