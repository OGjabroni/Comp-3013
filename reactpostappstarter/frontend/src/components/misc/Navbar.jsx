import React from "react";
import classes from "./Navbar.module.css";

import { Container, Group, Burger, Drawer, Stack } from "@mantine/core";
import useLinks from "./useLinks";
import { DrawerContext } from "../../Contexts/drawerContext";
import { Camera } from "./Navimage";
const Navbar = () => {
  const { opened, toggle } = React.useContext(DrawerContext);
  const [items] = useLinks();

  return (
    <div>
      <header className={classes.header}>
            <Container size="md" className={classes.inner}>
              <Camera/>
              <h1>Ultimate Photography</h1>
              <Group gap={5} visibleFrom="xs">
                {items}
              </Group>
              <Burger hiddenFrom="xs" opened={opened} onClick={toggle} />
              <Drawer
                withCloseButton={true}
                opened={opened}
                size="100%"
                onClose={toggle}
              >
                <Stack>{items}</Stack>
              </Drawer>
            </Container>
      </header>

    </div>
    
  );
};

export default Navbar;
