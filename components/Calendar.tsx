"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import toast from "react-hot-toast";
function Calender() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [effortsText, setEffortsText] = useState("");
  const [selectApp, setSelectApp] = useState("");
  const [selectOffice, setSelectOffice] = useState("");
  const [effortsHrs, setEffortsHrs] = useState<number[]>([]);
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const lines = effortsText.split("\n").filter(Boolean);

    setEffortsHrs((prevHrs) => {
      const newHrs = [...prevHrs];

      while (newHrs.length < lines.length) {
        newHrs.push(0);
      }
      // setComments(new Array(lines.length).fill(""));

      return newHrs.slice(0, lines.length);
    });
  }, [effortsText]);
  function handleIncrement(index: number) {
    const updated = [...effortsHrs];
    if (updated[index] < 9) updated[index] = updated[index] + 0.5;
    setEffortsHrs(updated);
  }
  function handleDecrement(index: number) {
    const updated = [...effortsHrs];
    if (updated[index] > 0) updated[index] = updated[index] - 0.5;
    setEffortsHrs(updated);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedDate) {
      const effortData = {
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
      setEffortsText("");
      setSelectApp("");
      setSelectOffice("");
      setmodalOpen(false);
      setComments(comments);
      toast.success("Efforts submitted successfully!");
    }
  }
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

  return (
    <div className="h-screen p-4 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl h-full p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          nowIndicator={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,",
          }}
          dateClick={(info) => {
            setSelectedDate(info.dateStr);
            setmodalOpen(true);
          }}
          height="100%"
        />
      </div>
      {modalOpen && (
        <div className="fixed inset-0 overflow-scroll h-screen   flex items-center justify-center z-50">
          <div className="bg-white h-3/3  p-6 rounded-xl shadow-lg w-full">
            <div className="flex justify-end">
              <X
                className="text-black items-end  cursor-pointer"
                onClick={() => setmodalOpen(false)}
              />
            </div>
            <div className="flex min-h-screen justify-between w-full ">
              <div className="w-1/4 p-4">
                <SideBar />
              </div>
              <div className="w-2/4 flex  p-4">
                {" "}
                {/* w-3/4 */}
                <div className="w-full ">
                  <h1 className="text-black text-2xl font-bold text-center mb-6">
                    {selectedDate?.slice(0, 10)}
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="date"
                      value={selectedDate || ""}
                    />

                    <div className="flex space-x-3">
                      <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">
                          Application
                        </label>
                        <select
                          name="application"
                          className="w-full border text-black border-gray-300 rounded-lg p-2 bg-transparent"
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
                      <div className="mb-4">
                        <label className="block text-black font-semibold mb-2">
                          Timing
                        </label>
                        <select
                          value={selectOffice}
                          onChange={(e) => setSelectOffice(e.target.value)}
                          name="application"
                          className="w-full border text-black border-gray-300 rounded-lg p-2 bg-transparent"
                          required
                        >
                          <option value="" disabled>
                            Select Status
                          </option>
                          <option value="App1">In Office</option>
                          <option value="App2">Out Office</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-black font-semibold mb-2">
                        Efforts
                      </label>
                      <textarea
                        name="efforts"
                        placeholder="Drop your efforts here..."
                        className="w-full h-32 border-2 border-dashed border-gray-400 text-black bg-transparent rounded-lg p-2 resize-none "
                        required
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          const droppedText =
                            e.dataTransfer.getData("text/plain");
                          setEffortsText((prev) =>
                            prev ? prev + "\n" + droppedText : droppedText
                          );
                        }}
                        value={effortsText}
                        onChange={(e) => setEffortsText(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-center m-4 gap-11">
                      {/* <div className="w-full">
                        <h1>Total Hrs: {totalHrs.toFixed(1)}</h1>
                      </div> */}
                      {/* <!-- Submit Button --> */}
                      <div className="text-center">
                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 cursor-pointer text-white px-6 py-2 rounded-xl hover:opacity-90 transition">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="h-[200px] overflow-y-auto ">
                      <div className="min-w-full bg-white text-black rounded-xl overflow-hidden">
                        <div>
                          <div className="flex shadow-lg  items-center justify-between bg-purple-700 text-white">
                            <p className="py-2 px-4 text-left">Activity Name</p>
                            <p className="py-2 px-4 text-left">Comments</p>
                            <p className="py-2 px-4 text-left">Effort (hrs)</p>
                          </div>
                        </div>
                        <div>
                          {(effortsText.split("\n") || []).map(
                            (text: string, index: number) => (
                              <div
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <div>
                                  <span>{text}</span>
                                </div>

                                {text && (
                                  <div className="flex items-center m-4 space-x-5">
                                    <div>
                                      <input
                                        value={comments[index] || ""}
                                        onChange={(e) => {
                                          const updated = [...comments];
                                          updated[index] = e.target.value;
                                          setComments(updated);
                                        }}
                                        className="border outline-none p-2 rounded-lg"
                                        type="text"
                                      />
                                    </div>
                                    <div>
                                      <h1
                                        onClick={() => handleIncrement(index)}
                                        className="w-5 cursor-pointer text-3xl truncate whitespace-nowrap overflow-hidden"
                                      >
                                        +
                                      </h1>
                                    </div>
                                    <div className="w-10 text-center">
                                      {effortsHrs[index] || 0}
                                    </div>
                                    <div>
                                      <h1
                                        className="w-5 cursor-pointer text-3xl truncate whitespace-nowrap overflow-hidden"
                                        onClick={() => handleDecrement(index)}
                                      >
                                        -
                                      </h1>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
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
// bg-[#0d011f]

