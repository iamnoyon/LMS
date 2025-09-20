"use client"

import { Box, Icon, Text, Collapse, Tooltip } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import React, { useState } from "react"
import { menuItems } from "../layouts/components/menu"
import { usePathname } from "next/navigation"
import NextLink from "next/link"

const Sidebar = ({ isCollapsed }) => {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(null)

    const handleToggle = (itemName) => {
        setOpenMenu(openMenu === itemName ? null : itemName)
    }

    return (
        <Box mt={5} display="flex" flexDirection="column" gap={1}>
            {menuItems.map((item) => {
                const isActive = pathname === item.path
                const activeColor = "pink.700"
                const inactiveColor = "white"

                return (
                    <Box key={item.name}>
                        {/* Parent Item */}
                        <Tooltip label={item.name} placement="top" hasArrow borderRadius={5}>
                            <NextLink href={item.path} passHref>
                                <Box
                                    role="group"
                                    bg={isActive ? "white" : "transparent"}
                                    mx={3}
                                    h="40px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    borderRadius="md"
                                    px={3}
                                    _hover={{ bg: "white", cursor: "pointer" }}
                                    onClick={() => item.children && handleToggle(item.name)}
                                >
                                    {/* Left side: Icon + Text */}
                                    <Box display="flex" alignItems="center">
                                        {item.icon && (
                                            <Icon
                                                as={item.icon} // replace with real icons later
                                                mr={2}
                                                color={isActive ? activeColor : inactiveColor}
                                                _groupHover={{ color: activeColor }}
                                            />
                                        )}
                                        {
                                            <Text
                                                fontSize="16px"
                                                fontWeight="500"
                                                color={isActive ? activeColor : inactiveColor}
                                                _groupHover={{ color: activeColor }}
                                                opacity={isCollapsed ? 0 : 1}
                                                transform={isCollapsed ? "scale(0.8)" : "scale(1)"}
                                                transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
                                                display={isCollapsed ? "none" : "block"}
                                            >
                                                {item.name}
                                            </Text>
                                        }
                                    </Box>
                                    {/* Right side: Arrow if children exist */}
                                    {item.children && (
                                        <Box
                                            color={inactiveColor}
                                            _groupHover={{ color: activeColor }}
                                            opacity={isCollapsed ? 0 : 1}
                                            transition="opacity 0.3s ease-in-out"
                                        >
                                            {openMenu === item.name ? (
                                                <ChevronDownIcon boxSize={4} />
                                            ) : (
                                                <ChevronRightIcon boxSize={4} />
                                            )}
                                        </Box>
                                    )}
                                </Box>
                            </NextLink>
                        </Tooltip>

                        {/* Child Items */}
                        {item.children && (
                            <Collapse in={openMenu === item.name} animateOpacity>
                                <Box mx={5} display="flex" flexDirection="column" gap={1} mt={1}>
                                    {item.children.map((child) => {
                                        const childActive = pathname === child.path
                                        return (
                                            <Tooltip label={child.name} key={child.name} placement="top" hasArrow borderRadius={5}>
                                                <NextLink href={child.path} passHref>
                                                    <Box
                                                        role="group"
                                                        bg={childActive ? "white" : "transparent"}
                                                        h="35px"
                                                        display="flex"
                                                        alignItems="center"
                                                        borderRadius="md"
                                                        px={3}
                                                        _hover={{ bg: "white", cursor: "pointer" }}
                                                    >
                                                        {child.icon && (
                                                            <Icon
                                                                as={child.icon}
                                                                mr={2}
                                                                color={childActive ? activeColor : inactiveColor}
                                                                _groupHover={{ color: activeColor }}
                                                            />
                                                        )}
                                                        {
                                                            isCollapsed ? null :

                                                                <Text
                                                                    fontSize="14px"
                                                                    fontWeight="600"
                                                                    color={childActive ? activeColor : inactiveColor}
                                                                    _groupHover={{ color: activeColor }}
                                                                >
                                                                    {child.name}
                                                                </Text>
                                                        }
                                                    </Box>
                                                </NextLink>
                                            </Tooltip>
                                        )
                                    })}
                                </Box>
                            </Collapse>
                        )}
                    </Box>
                )
            })}
        </Box>
    )
}

export default Sidebar
