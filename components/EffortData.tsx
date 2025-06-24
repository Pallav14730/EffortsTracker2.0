export default function EffortData() {
  return (
    <div className="m-5 space-y-2 w-70 text-sm overflow-y-scroll ">
      <p className="border text-center px-5 text-black border-gray-300 rounded-lg p-2 bg-transparent">
        Tower A
      </p>
      <h1 className="bg-white p-3 rounded-lg text-lg">
        Activities/Sub Activities{" "}
      </h1>
      <div className="space-y-2 bg-white p-3 rounded-lg shadow-2xl">
        <div>
          <h1 className="text-xl text-gray-500">IM Activities</h1>
        </div>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "IM Activity",
                color: "#15803d",
              })
            );
          }}
          className="bg-green-700 cursor-move text-left text-white p-2 rounded-md"
        >
          IM Activity
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Sev9",
                color: "#fb923c",
              })
            );
          }}
          className="bg-orange-400 cursor-move text-left text-white p-2 rounded-md"
        >
          Sev9
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Change Request",
                color: "#60a5fa",
              })
            );
          }}
          className="bg-blue-400 cursor-move text-left  text-white p-2 rounded-md"
        >
          Change Request
        </h1>
      </div>
      <div className="space-y-2 bg-white p-3 rounded-lg shadow-2xl">
        <div>
          <h1 className="text-xl text-gray-500">Non IM Activites</h1>
        </div>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Job Monitoring",
                color: "#15803d",
              })
            );
          }}
          className="bg-green-700 cursor-move text-left text-white p-2 rounded-md"
        >
          Job Monitoring
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Email Monitoring",
                color: "#fb923c",
              })
            );
          }}
          className="bg-orange-400 cursor-move text-left text-white p-2 rounded-md"
        >
          Email Monitoring
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Documentation",
                color: "#1d4ed8",
              })
            );
          }}
          className="bg-blue-700 cursor-move text-left  text-white p-2 rounded-md"
        >
          Documentation
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Customer Meeting",
                color: "#15803d",
              })
            );
          }}
          className="bg-green-700 cursor-move text-left  text-white p-2 rounded-md"
        >
          Customer Meeting
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Internal/Team Meeting",
                color: "#1d4ed8",
              })
            );
          }}
          className="bg-blue-400 cursor-move text-left  text-white p-2 rounded-md"
        >
          Internal/Team Meeting
        </h1>
      </div>
      <div className="space-y-2 bg-white p-3 rounded-lg shadow-2xl">
        <div>
          <h1 className="text-xl text-gray-500">Enhancements</h1>
        </div>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Requirement",
                color: "#15803d",
              })
            );
          }}
          className="bg-green-700 cursor-move text-left text-white p-2 rounded-md"
        >
          Requirement
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Analysis",
                color: "#fb923c",
              })
            );
          }}
          className="bg-orange-400 cursor-move text-left text-white p-2 rounded-md"
        >
          Analysis
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Customer Meeting",
                color: "#1d4ed8",
              })
            );
          }}
          className="bg-blue-400 cursor-move  text-left  text-white p-2 rounded-md"
        >
          Customer Meeting
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Coding",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Coding
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Internal/Team Meeting",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Internal/Team Meeting
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Testing",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Testing
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Implementation",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Implementation
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Post Implementation",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Post Implementation
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Documentation",
                color: "#ef4444",
              })
            );
          }}
          className="bg-red-500 cursor-move text-left  text-white p-2 rounded-md"
        >
          Documentation
        </h1>
      </div>
      <div className="space-y-2 bg-white p-3 rounded-lg shadow-2xl">
        <div>
          <h1 className="text-xl  text-gray-500">Others</h1>
        </div>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Leave",
                color: "#15803d",
              })
            );
          }}
          className="bg-green-700 cursor-move text-left text-white p-2 rounded-md"
        >
          Leave
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Break",
                color: "#fb923c",
              })
            );
          }}
          className="bg-orange-400 cursor-move  text-left text-white p-2 rounded-md"
        >
          Break
        </h1>
        <h1
          draggable
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = "copy";
            e.dataTransfer.setData(
              "application/json",
              JSON.stringify({
                title: "Self Learning",
                color: "#1d4ed8",
              })
            );
          }}
          className="bg-blue-400 cursor-move text-left  text-white p-2 rounded-md"
        >
          Self Learning
        </h1>
      </div>
    </div>
  );
}
