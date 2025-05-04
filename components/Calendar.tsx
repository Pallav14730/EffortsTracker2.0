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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedDate) {
      const effortData = {
        application: setSelectApp,
        office: setSelectOffice,
        efforts: effortsText,
      };

      localStorage.setItem(
        `efforts-${selectedDate}`,
        JSON.stringify(effortData)
      );
      setEffortsText("");
      setSelectApp("");
      setSelectOffice("");
      setmodalOpen(false);
      toast.success("Efforts submitted successfully!");
    }
  }
  useEffect(() => {
    if (modalOpen && selectedDate) {
      const savedEfforts = localStorage.getItem(`efforts-${selectedDate}`);
      if (savedEfforts) {
        try {
          const parsed = JSON.parse(savedEfforts);
          setEffortsText(parsed.efforts || "");
          setSelectApp(parsed.application || "");
          setSelectOffice(parsed.office || "");
        } catch (error) {
          console.error("Error parsing saved efforts:", error);
          setEffortsText("");
          setSelectApp("");
          setSelectOffice("");
        }
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
        <div className="fixed inset-0   flex items-center justify-center z-10">
          <div className="bg-[#0d011f] h-3/3 p-6 rounded-xl shadow-lg w-full">
            <div className="flex justify-end">
              <X
                className="text-white items-end  cursor-pointer"
                onClick={() => setmodalOpen(false)}
              />
            </div>
            <div className="flex min-h-screen w-full ">
              {/* Sidebar aligned left */}
              <div className="w-1/4 p-4">
                <SideBar />
              </div>

              {/* Form aligned right */}
              <div className="w-3/4 flex justify-end p-8">
                <div className="w-full max-w-md">
                  <h1 className="text-white text-2xl font-bold text-center mb-6">
                    {selectedDate?.slice(0, 10)}
                  </h1>
                  <form onSubmit={handleSubmit}>
                    {/* Selected Date as Hidden Input */}
                    <input
                      type="hidden"
                      name="date"
                      value={selectedDate || ""}
                    />

                    {/* Application Dropdown */}
                    <div className="flex space-x-3">
                      <div className="mb-4">
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
                      <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">
                          Office
                        </label>
                        <select
                          value={selectOffice}
                          onChange={(e) => setSelectOffice(e.target.value)}
                          name="application"
                          className="w-full border text-white border-gray-300 rounded-lg p-2 bg-transparent"
                          required
                        >
                          <option value="App1">In Office</option>
                          <option value="App2">Out Office</option>
                        </select>
                      </div>
                    </div>

                    {/* Efforts Textarea */}
                    <div className="mb-4">
                      <label className="block text-white font-semibold mb-2">
                        Efforts
                      </label>
                      <textarea
                        name="efforts"
                        placeholder="Drop your efforts here..."
                        className="w-full h-32 border-2 border-dashed border-gray-400 text-white bg-transparent rounded-lg p-2 resize-none placeholder-white"
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

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-purple-700 cursor-pointer hover:bg-[#3b2a4f] rounded-xl w-full py-2 px-4 text-white font-semibold transition"
                      >
                        Submit
                      </button>
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
