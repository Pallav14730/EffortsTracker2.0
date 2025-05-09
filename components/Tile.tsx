"use client";

import { PlusIcon, TrashIcon } from "lucide-react";
import { useState, useEffect } from "react";
export default function Tile() {
  const [TileData, setTileData] = useState("");
  const [customTiles, setCustomTiles] = useState<string[]>([]);

  useEffect(() => {
    const storedTiles = localStorage.getItem("customTiles");
    if (storedTiles) {
      setCustomTiles(JSON.parse(storedTiles));
    }
  }, []);

 
  useEffect(() => {
    // if (customTiles.length > 0) {
      localStorage.setItem("customTiles", JSON.stringify(customTiles));
    // }
  }, [customTiles]);

  function onTileAdd() {
    if (TileData.trim()) {
      const newTiles = [...customTiles, TileData.trim()];
      setCustomTiles(newTiles);
      setTileData("");
    }
  }
  const handleDeleteTile = (tileToDelete: string) => {
    const updated = customTiles.filter((tile) => tile !== tileToDelete);
    setCustomTiles(updated);
  };
  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition-all delay-600">
          Production Support - IM Activites
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - IM Activites - PI Activity"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              PI Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - IM Activites - Knowledge Transition"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Knowledge Transition
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - IM Activites - Documentation "
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center cursor-move flex items-center gap-3 transition"
            >
              Documentation
            </p>
          </div>
          <div className="relative group/child">
            <p className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
              IM Activity
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              <div className="flex items-center gap-2">
                <input
                  className="bg-[#3b2a4f] border text-white rounded-md py-2 px-3 w-full"
                  type="text"
                  value={TileData}
                  onChange={(e) => setTileData(e.target.value)}
                  placeholder="Enter comment"
                />
                <PlusIcon
                  onClick={onTileAdd}
                  className="text-black cursor-pointer"
                />
              </div>
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData(
                        "text/plain",
                        `Production Support - IM Activites - ${item}`
                      )
                    }
                    className="bg-[#3b2a4f] flex-1 cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
                  >
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - IM Activites - Customer Meeting, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Customer Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - IM Activites - Internal Meeting, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
              Sev9
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              <div className="flex items-center gap-2">
                <input
                  className="bg-[#3b2a4f] border text-white rounded-md py-2 px-3 w-full"
                  type="text"
                  value={TileData}
                  onChange={(e) => setTileData(e.target.value)}
                  placeholder="Enter comment"
                />
                <PlusIcon
                  onClick={onTileAdd}
                  className="text-black cursor-pointer"
                />
              </div>
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData(
                        "text/plain",
                        `Production Support - IM Activites - ${item}`
                      )
                    }
                    className="bg-[#3b2a4f] cursor-move flex-1 hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
                  >
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
          Production Support - Non IM Activites
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Customer Meeting, "
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Customer Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - PI Activity, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              PI Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Non IM Activity, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Non IM Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Documentation, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Documentation
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Internal Meeting, "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Knowledge Transition "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Knowledge Transition
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Core Activities "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Core Activites
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  " Production Support - Non IM Activites - Application Maintenance Activity "
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Application Maintenance Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Production Support - Non IM Activites - Call List, "
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Call List
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
          Enhancement less than 80 hours
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
              Enhancement
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              <div className="flex items-center gap-2">
                <input
                  className="bg-[#3b2a4f] border text-white rounded-md py-2 px-3 w-full"
                  type="text"
                  value={TileData}
                  onChange={(e) => setTileData(e.target.value)}
                  placeholder="Enter comment"
                />
                <PlusIcon
                  onClick={onTileAdd}
                  className="text-black cursor-pointer"
                />
              </div>
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData(
                        "text/plain",
                        `Enhancement less than 80 hours - ${item} `
                      )
                    }
                    className="bg-[#3b2a4f] flex-1 cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
                  >
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Customer Meeting"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Customer Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Knowledge Transition"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Knowledge Transition
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - PI Activities"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              PI Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Internal Meeting"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Requirement Finalization"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Requirement Finalization
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Analysis & Design"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Analysis & Design
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Coding"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Coding
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Testing"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center cursor-move flex items-center gap-3 transition"
            >
              Testing
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Implementation"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Implementation
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement less than 80 hours - Post Implementation"
                )
              }
              className="bg-[#3b2a4f]  cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Post Implementation
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
          Enhancement greater than 80 hours
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
              Enhancement
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              <div className="flex items-center gap-2">
                <input
                  className="bg-[#3b2a4f] border text-white rounded-md py-2 px-3 w-full"
                  type="text"
                  value={TileData}
                  onChange={(e) => setTileData(e.target.value)}
                  placeholder="Enter comment"
                />
                <PlusIcon
                  onClick={onTileAdd}
                  className="text-black cursor-pointer"
                />
              </div>
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData(
                        "text/plain",
                        `Enhancement greater than 80 hours - ${item}`
                      )
                    }
                    className="bg-[#3b2a4f] flex-1 cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
                  >
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Customer Meeting"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Customer Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Knowledge Transition"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Knowledge Transition
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - PI Activity"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              PI Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Internal Meeting"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Requirement Finalization"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Requirement Finalization
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Analysis & Design"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Analysis & Design
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Coding"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Coding
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Testing"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border rounded-xl cursor-move py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Testing
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Implementation"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Implementation
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Enhancement greater than 80 hours - Post Implementation"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Post Implementation
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
          Project / Capex
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Development/Coding"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Development/Coding
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Testing"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Testing
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Customer Meeting"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Customer Meeting
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p className="bg-[#3b2a4f] flex-1 hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Documentation"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Documentation
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Knowledge Transition"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Knowledge Transition
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - PI Activity"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              PI Activity
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Internal Meeting"
                )
              }
              className="bg-[#3b2a4f] cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Implementation"
                )
              }
              className="bg-[#3b2a4f]  cursor-move hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Implementation
            </p>
          </div>

          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Project / Capex - Requirement Analysis & Design"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Requirement Analysis & Design
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 relative group text-white px-1 text-md leading-tight">
        <p className="bg-[#3b2a4f] hover:bg-purple-700 rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
          Others
        </p>
        <div className="absolute top-0 space-y-2 left-full w-56 rounded hidden group-hover:flex group-hover:flex-col z-10">
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Other - TCS Internal Project Management"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              TCS Internal Project Management
            </p>
            <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p className="bg-[#3b2a4f] flex-1 hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer text-black"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", "Other - Self Learning")
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Self Learning
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", "Other - Leave")
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 border cursor-move rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Leave
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", "Other - Break")
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Break
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Other - TCS Internal IPMS/IQMS"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              TCS Internal IPMS/IQMS
            </p>
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", "Other - Internal Meeting")
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Internal Meeting
            </p>
            {/* <div className="absolute top-0 left-full hidden group-hover/child:flex group-hover/child:flex-col space-y-2 w-56 z-20">
              <div className="flex items-center gap-2">
                <input
                  className="bg-[#3b2a4f] border text-white rounded-md py-2 px-3 w-full"
                  type="text"
                  value={TileData}
                  onChange={(e) => setTileData(e.target.value)}
                  placeholder="Enter comment"
                />
                <PlusIcon
                  onClick={onTileAdd}
                  className="text-white cursor-pointer"
                />
              </div>
              {customTiles.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center">
                  <p className="bg-[#3b2a4f] flex-1 hover:bg-purple-700 border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition">
                    {item}
                  </p>
                  <TrashIcon
                    onClick={() => handleDeleteTile(item)}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div> */}
          </div>
          <div className="relative group/child">
            <p
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData(
                  "text/plain",
                  "Other - Late Due to Delay"
                )
              }
              className="bg-[#3b2a4f] hover:bg-purple-700 cursor-move border rounded-xl py-2 px-4 text-center flex items-center gap-3 transition"
            >
              Late Due to Delay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
