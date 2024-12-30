import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { isEnvBrowser } from "../utils/misc";
import Menu from "./Panel";

import "./index.scss";
import { fetchNui } from "../utils/fetchNui";

const App: React.FC = () => {
  const [panelVisible, setScoreboardVisible] = useState(false);
  const [playerData, setPlayerData] = useState([]);

  const simulatedData = {
    data: [
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
      {
        id: 1,
        name: "Player 1",
        job: "Police Officer",
        playersCount: 3,
        group: "Admin",
        rpName: "John Doe",
      },
      {
        id: 2,
        name: "Player 2",
        job: "Mechanic",
        playersCount: 3,
        group: "User",
        rpName: "Jane Smith",
      },
      {
        id: 3,
        name: "Player 3",
        job: "Doctor",
        playersCount: 3,
        group: "User",
        rpName: "Alex Taylor",
      },
    ],
  };

  useNuiEvent<any>("openScoreboard", (data) => {
    setScoreboardVisible(data.Visible);
    if (data.Visible) {
      setPlayerData(data.Data);

    }

  });

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (panelVisible && e.code === "Escape") {
        if (!isEnvBrowser()) {
          fetchNui("LGF_Scoreboard:closePanel", {
            uiName: "openScoreboard",
          });
        }

      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [panelVisible]);

  return (
    <>
      <Menu visible={panelVisible} playerData={playerData}  />

      {isEnvBrowser() && (
        <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
          <Button
            onClick={() => setScoreboardVisible((prev) => !prev)}
            variant="default"
            color="orange"
            style={{ marginBottom: 10, width: 150 }}
          >
            Toggle Panel
          </Button>
        </div>
      )}
    </>
  );
};

export default App;
