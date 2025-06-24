"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { EventContentArg, EventInput } from "@fullcalendar/core";
import MenuData from "./MenuData";
import EffortData from "./EffortData";
import { v4 as uuidv4 } from "uuid";

interface ToggleData {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}
export function Calender({ isMenuOpen, toggleMenu }: ToggleData) {
  const [modalOpen, setmodalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [effortsText, setEffortsText] = useState("");
  const [selectApp, setSelectApp] = useState("");
  const [selectOffice, setSelectOffice] = useState("");
  const [effortsHrs, setEffortsHrs] = useState<number[]>([]);
  const [comments, setComments] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [droppedTiles, setDroppedTiles] = useState<
    { title: string; color: string; effHrs: number }[]
  >([]);

  const [fullcalendarEvents, setFullcalendarEvents] = useState<EventInput[]>(
    []
  );
  useEffect(() => {
    const lines = effortsText.split("\n").filter(Boolean);

    setEffortsHrs((prevHrs) => {
      const newHrs = [...prevHrs];

      while (newHrs.length < lines.length) {
        newHrs.push(0);
      }

      return newHrs.slice(0, lines.length);
    });
  }, [effortsText]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedDate) {
      const effortData = {
        other: "Efforts Filled",
        start: Date,
        application: selectApp,
        office: selectOffice,
        efforts: effortsText,
        effortsHrs: effortsHrs,
        comments: comments,
      };
      localStorage.setItem(
        `efforts-${selectedDate}`,
        JSON.stringify(effortData)
      );

      const newEvents = effortsHrs.map((hrs, index) => {
        return {
          id: uuidv4(),
          title: droppedTiles[index]?.title || "Untitled",
          start: selectedDate,
          allDay: true,
          // effortHr: Number(hrs),
          extendedProps: {
            effortHr: hrs,
          },
          color: droppedTiles[index]?.color,
        };
      });

      setFullcalendarEvents((prevEvents) => [...prevEvents, ...newEvents]);
      localStorage.setItem(`events-${selectedDate}`, JSON.stringify(newEvents));
      // console.log(newEvents);

      setEffortsText("");
      setSelectApp("");
      setSelectOffice("");
      setmodalOpen(false);
      setComments(comments);
      // setfullCalendarEvents([]);
      toast.success("Efforts submitted successfully!");
    }
  }
  useEffect(() => {
    const allEvents: EventInput[] = [];

    for (const key in localStorage) {
      if (key.startsWith("events-")) {
        const eventData = localStorage.getItem(key);

        if (eventData) {
          try {
            const parsed = JSON.parse(eventData);
            if (Array.isArray(parsed)) {
              allEvents.push(...parsed);
            }
          } catch (e) {
            console.error(`Error parsing events from key ${key}`, e);
          }
        }
      }
    }

    setFullcalendarEvents(allEvents);
  }, []);

  useEffect(() => {
    if (modalOpen && selectedDate) {
      const savedEfforts = localStorage.getItem(`efforts-${selectedDate}`);
      if (savedEfforts) {
        const parsed = JSON.parse(savedEfforts);
        setEffortsText(parsed.efforts || "");
        setSelectApp(parsed.application || "");
        setSelectOffice(parsed.office || "");
        setEffortsHrs(parsed.effortsHrs || []);
        setComments(parsed.comments || []);
      } else {
        setEffortsText("");
        setSelectApp("");
        setSelectOffice("");
      }
    }
  }, [modalOpen, selectedDate]);
  function handleEventClick(info: EventInput) {
    if (!confirm("Do you want to delete this tile?")) return;

    const eventId = info.event.id;
    const eventDate = info.event.startStr;

    setFullcalendarEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
    const stored = localStorage.getItem(`events-${eventDate}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      const updated = parsed.filter(
        (event: EventInput) => event.id !== eventId
      );
      localStorage.setItem(`events-${eventDate}`, JSON.stringify(updated));
    }
    info.event.remove();
  }

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div className="flex ">
        <b className="flex-1">{eventInfo.event.title}</b>
        <small>{eventInfo.event.extendedProps.effortHr} hrs</small>
      </div>
    );
  };

  return (
    <div className="flex h-screen p-4  bg-gray-50">
      {isMenuOpen && <MenuData onClickcrossMenu={toggleMenu} />}
      <EffortData />
      <div className=" bg-white rounded-2xl shadow-xl h-full w-full p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          nowIndicator={true}
          displayEventTime={false}
          dragScroll={true}
          views={{
            dayGridMonth: {
              dayMaxEventRows: 2,
            },
            timeGridWeek: {
              dayMaxEventRows: false,
            },
            timeGridDay: {
              dayMaxEventRows: false,
            },
          }}
          events={fullcalendarEvents}
          eventContent={renderEventContent}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridDay,dayGridWeek",
          }}
          dateClick={(info) => {
            setSelectedDate(info.dateStr);
            setmodalOpen(true);
          }}
          eventClick={handleEventClick}
          height="100%"
        />
      </div>
      {modalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/7  z-50 rounded-xl p-4 shadow-2xl">
          <div className="bg-teal-900 text-center rounded-xl shadow-lg">
            <div className="flex  justify-end">
              <X
                className="text-white items-end m-2  cursor-pointer"
                onClick={() => setmodalOpen(false)}
              />
            </div>
            <div className="">
              {/* <div className="w-1/4 p-4">
                <SideBar />
              </div> */}
              <div className=" flex">
                {" "}
                {/* w-3/4 */}
                <div className="w-full">
                  <h1 className="text-white text-2xl font-bold text-center mb-6">
                    {selectedDate?.slice(0, 10)}
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="date"
                      value={selectedDate || ""}
                    />

                    {/* <div className="flex items-center justify-center space-x-3">
                      <div className="mb-6.5">
                        <label className="block text-white font-semibold mb-2">
                          Application
                        </label>
                        <select
                          name="application"
                          className="w-full border text-white border-gray-300 rounded-lg p-2 bg-transparent"
                          value={selectApp}
                          onChange={(e) => setSelectApp(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Select Application
                          </option>
                          <option value="App1">App1</option>
                          <option value="App2">App2</option>
                          <option value="App3">App3</option>
                        </select>
                      </div>
                      <div className=" border border-white rounded-lg px-10 py-1.5 text text-white">
                        <h1>In Office</h1>
                      </div>
                    </div> */}
                    <div>
                      <div className="flex items-center justify-center space-x-3 mb-6 text-white font-semibold">
                        <h1 className="border px-5 rounded-md py-1">
                          Billing{" "}
                        </h1>
                        <h1 className="border px-5 rounded-md py-1 ">
                          Centricity
                        </h1>
                        <h1 className="border px-5 rounded-md py-1">
                          In Office
                        </h1>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-white font-semibold mb-2">
                        Efforts
                      </label>
                      <textarea
                        name="efforts"
                        placeholder="Drag and Drop an Activity Here..."
                        className={`w-2/3 min-h-32 max-h-32 border-2 text-white rounded-lg p-2 resize-none transition-all 
                          ${
                            isDragging
                              ? "border-blue-400 bg-teal-800"
                              : "border-dashed border-gray-400 bg-transparent"
                          }`}
                        required
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.dataTransfer.dropEffect = "copy";
                        }}
                        onDragEnter={() => setIsDragging(true)}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setIsDragging(false);

                          const droppedDataRaw =
                            e.dataTransfer.getData("application/json");

                          try {
                            const droppedData = JSON.parse(droppedDataRaw);
                            const droppedTitle = droppedData.title;
                            setDroppedTiles((prev) => [
                              ...prev,
                              {
                                title: droppedData.title,
                                color: droppedData.color,
                                effHrs:
                                  effortsHrs.length > 0 ? effortsHrs[0] : 0,
                              },
                            ]);
                            console.log(droppedTiles);

                            setEffortsText((prev) =>
                              prev ? prev + "\n" + droppedTitle : droppedTitle
                            );
                          } catch (error) {
                            console.error("Invalid drop data", error);
                          }
                        }}
                        value={effortsText}
                        onChange={(e) => setEffortsText(e.target.value)}
                      ></textarea>
                    </div>
                    {/* <div className="flex items-center justify-center m-4 gap-11">
                      <div className="text-center">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 cursor-pointer text-white px-6 py-2 rounded-xl hover:opacity-90 transition">
                          Submit
                        </button>
                      </div>
                    </div> */}
                    <div className="h-[200px] w-3/4 mx-auto  overflow-y-auto ">
                      <div className="flex flex-col justify-center content-center  bg-white text-black  rounded-xl overflow-hidden">
                        <div className="">
                          <div className="flex shadow-lg  items-center justify-between bg-purple-700 text-white">
                            <p className=" px-4 text-left">Activity Name</p>
                            <p className=" px-4 text-left">Comments</p>
                            <p className="py-2 px-4 text-left">Effort (hrs)</p>
                          </div>
                        </div>
                        <div>
                          {(effortsText.split("\n") || []).map(
                            (text: string, index: number) => (
                              <div
                                key={index}
                                className="flex m-2 items-center justify-between"
                              >
                                <div>
                                  <span>{text}</span>
                                </div>

                                {!text ? (
                                  <div className="flex items-center justify-center w-full h-full">
                                    <p className="text-gray-400">
                                      Please Fill your efforts
                                    </p>
                                  </div>
                                ) : (
                                  <div className="flex items-center  space-x-5">
                                    <div>
                                      <input
                                        value={comments[index] || ""}
                                        onChange={(e) => {
                                          const updated = [...comments];
                                          updated[index] = e.target.value;
                                          setComments(updated);
                                        }}
                                        className="border w-full outline-none p-2 rounded-lg"
                                        type="text"
                                      />
                                    </div>
                                    <div className="efforts-hrs m-4">
                                      <input
                                        type="number"
                                        min="0"
                                        step="0.1"
                                        value={
                                          effortsHrs[index]?.toString() || ""
                                        }
                                        onChange={(e) =>
                                          setEffortsHrs((prev) => {
                                            const updated = [...prev];
                                            updated[index] =
                                              parseFloat(e.target.value) || 0;
                                            return updated;
                                          })
                                        }
                                        className="w-19 text-center p-2 rounded-lg border outline-none no-spinner"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center m-4 gap-11">
                      <div className="text-center">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 cursor-pointer text-white px-6 py-2 rounded-xl hover:opacity-90 transition">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Calender;
