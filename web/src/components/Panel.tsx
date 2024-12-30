import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Switch,
  Group,
  Card,
  Grid,
  ScrollArea,
  Title,
  Tooltip,
  Badge,
  Transition
} from "@mantine/core";
import { IconSettings, IconList, IconId, IconBriefcase, IconTag, IconEyeOff } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface Player {
  id: number;
  name: string;
  job: string;
  playersCount: number;
  group: string;
  rpName: string;
}

interface ScoreboardProps {
  visible: boolean;
  playerData: { data: Player[] };
}

const Scoreboard: React.FC<ScoreboardProps> = ({ visible, playerData }) => {
  const [showName, setShowName] = useState<boolean>(true);
  const [showRP, setShowRP] = useState<boolean>(false);
  const [toggleJob, setToggleJob] = useState<boolean>(false);
  const [showGroup, setShowGroup] = useState<boolean>(true);
  const [showPlayerId, setShowPlayerId] = useState<boolean>(true);

  const [view, setView] = useState<"players" | "settings">("players");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); 
  
  const checkedColor = isDarkMode ? 'rgb(45, 55, 72)' : 'rgb(245, 245, 245)';

  const players = playerData || [];

  return (
    <Transition
      mounted={visible}
      transition="slide-right"
      duration={500}
      timingFunction="ease"
    >
      {(styles) => (
        <div
          style={{
            ...styles,
            backgroundColor: checkedColor,

          }}
          className="container-top-scoreboard"
        >
          <Box style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "8px" }}>
            <Tooltip radius="sm" withArrow color="gray" label="Player List" position="bottom">
              <Button
                compact
                radius="xs"
                style={{
                  border: "3px solid rgba(255, 255, 255, 0.1)",
                }}
                size="sm"
                variant="light"
                color="indigo"
                onClick={() => setView("players")}
                title="Player List"
              >
                <IconList size={13} />
              </Button>
            </Tooltip>
            <Tooltip radius="sm" withArrow color="gray" label="Settings" position="bottom">
              <Button
                compact
                radius="xs"
                style={{
                  border: "3px solid rgba(255, 255, 255, 0.1)",
                }}
                size="sm"
                variant="light"
                color="red"
                onClick={() => setView("settings")}
                title="Settings"
              >
                <IconSettings size={13} stroke={1} />
              </Button>
            </Tooltip>
          </Box>

          {view === "players" ? (
            <div>
              <Title
                order={4}
                mb={0}
                tt="uppercase"
                weight={500}
                style={{
                  color: isDarkMode ? "#fff" : "#333",
                  letterSpacing: "1px",
                }}
              >
                Player List (Online:{players.length})
              </Title>
              <ScrollArea scrollbarSize={0} h={580}>
              <Grid gutter="xs" mt="xs" columns={3}>
                {players.map((player, index) => (
                  <Grid.Col span={3} key={player.id}>
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Card
                        shadow="sm"
                        padding="xs"
                        style={{
                          border: "3px solid rgba(255, 255, 255, 0.1)",
                          backgroundColor: "rgba(55, 65, 81, 0.85)",
                        }}
                      >
                        <Group position="apart">
                          <Group spacing={6}>

     
                            <div
                              style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: "rgba(16, 185, 129, 0.85)",
                                borderRadius: "20%",
                                alignSelf: "center",
                              }}
                            ></div>

                            <Text
                              tt="uppercase"
                              weight={600}
                              mb={1}
                              style={{
                                fontSize: "14px",
                                color: "#fff",
                                textTransform: "uppercase",
                              }}
                            >
                              {showRP && !showName ? (
                                <strong>{player.rpName}</strong>
                              ) : showName ? (
                                <strong>{player.name}</strong>
                              ) : (
                                <Group spacing={3}>
                                  <IconEyeOff size={14} color="#ddd" />
                                  <Text style={{ color: "#ddd" }}>
                                    <strong>Anon</strong>
                                  </Text>
                                </Group>
                              )}
                            </Text>
                          </Group>

              
                          {showGroup && (
                            <Badge radius="xs" color="teal" variant="dot" size="xs">
                              {player.group}
                            </Badge>
                          )}
                        </Group>

                
                        {showPlayerId && (
                          <Group spacing={4} style={{ fontSize: "12px", color: "#ddd" }}>
                            <IconId size={14} color="#ddd" />
                            <Text>
                              <strong>Player ID:</strong> {player.id}
                            </Text>
                          </Group>
                        )}

                        {toggleJob && (
                          <Group spacing={4} style={{ fontSize: "12px", color: "#ddd" }}>
                            <IconBriefcase size={14} color="#ddd" />
                            <Text>
                              <strong>Job:</strong> {player.job}
                            </Text>
                          </Group>
                        )}


                        {showRP && (
                          <Group spacing={4} style={{ fontSize: "12px", color: "#ddd" }}>
                            <IconTag size={14} color="#ddd" />
                            <Text>
                              <strong>RP Name:</strong> {player.rpName}
                            </Text>
                          </Group>
                        )}
                      </Card>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </ScrollArea>

            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div>
                <Title
                    order={4}
                  mb={0}
                  tt="uppercase"
                  weight={500}
                  style={{
                    color: isDarkMode ? "#fff" : "#333", 
                    letterSpacing: "1px",
                  }}
                >
                  Settings
                </Title>
                <Grid gutter="xs" mt="xs" columns={3}>

                  <Grid.Col span={3}>
                    <Card shadow="sm" padding="xs" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(55, 65, 81, 0.85)" }}>
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>Show Name</Text>
                        <Switch radius="xs" checked={showName} onChange={(e) => setShowName(e.currentTarget.checked)} color="teal" size="sm" />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle to show or hide player names in the list.
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Card shadow="sm" padding="xs" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(55, 65, 81, 0.85)" }}>
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>Show RP Name</Text>
                        <Switch radius="xs" checked={showRP} onChange={(e) => setShowRP(e.currentTarget.checked)} color="teal" size="sm" />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle to show or hide the RP name of players.
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Card shadow="sm" padding="xs" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(55, 65, 81, 0.85)" }}>
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>Toggle Job</Text>
                        <Switch radius="xs" checked={toggleJob} onChange={(e) => setToggleJob(e.currentTarget.checked)} color="teal" size="sm" />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle to show or hide the job of players.
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Card shadow="sm" padding="xs" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(55, 65, 81, 0.85)" }}>
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>Show Group</Text>
                        <Switch radius="xs" checked={showGroup} onChange={(e) => setShowGroup(e.currentTarget.checked)} color="teal" size="sm" />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle to show or hide the group of players.
                      </Text>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Card shadow="sm" padding="xs" style={{ border: "1px solid rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(55, 65, 81, 0.85)" }}>
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>Show Player ID</Text>
                        <Switch radius="xs" checked={showPlayerId} onChange={(e) => setShowPlayerId(e.currentTarget.checked)} color="teal" size="sm" />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle to show or hide the Player ID of players.
                      </Text>
                    </Card>
                  </Grid.Col>
                     <Grid.Col span={3}>
                    <Card
                      shadow="sm"
                      padding="xs"
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backgroundColor: "rgba(55, 65, 81, 0.85)" 
                      }}
                    >
                      <Group position="apart">
                        <Text weight={500} style={{ fontSize: "14px" }}>
                          Theme Mode
                        </Text>
                        <Switch
                          radius="xs"
                          checked={isDarkMode}
                          onChange={(e) => setIsDarkMode(e.currentTarget.checked)}
                          color="teal"
                          size="sm"
                        />
                      </Group>
                      <Text size="xs" style={{ color: "#ccc" }}>
                        Toggle between dark and light mode.
                      </Text>
                    </Card>
                  </Grid.Col>
                </Grid>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </Transition>
  );
};


export default Scoreboard;
