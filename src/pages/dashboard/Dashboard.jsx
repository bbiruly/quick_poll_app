import Sidebar from '../../components/ui/Sidebar'
import { links } from '../../constant/constant'
import logo from "../../assets/react.svg";
import axios from 'axios';
import { useEffect, useState } from 'react';


const Dashboard = () => {
  const [polls, setPolls] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  useEffect(() => {
    fetchPolls();
    const interval = setInterval(fetchPolls, 5000); // Auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const fetchPolls = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/quickpoll/polls`);
    setPolls(data);
  };

  const createPoll = async () => {
    if (!question || options.some(opt => !opt)) return;
    await axios.post(`${import.meta.env.VITE_API_URL}/api/quickpoll/polls`, { question, options });
    setQuestion("");
    setOptions(["", ""]);
    fetchPolls();
  };

  const vote = async (pollId, optionIndex) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/quickpoll/${pollId}/vote`, { optionIndex });
    fetchPolls();
  };
  return (
    <div className="flex h-screen">
      {/* SIDEBAR - Fixed to the left */}
      <div className="md:w-64 md:fixed inset-y-0 left-0 bg-white shadow-lg">
        <Sidebar
          links={links}
          logo={logo}
          footer={<p className="text-sm text-gray-400">© 2024 Quick Polling App</p>}
        />
      </div>

      {/* MAIN CONTENT - Push right with margin */}
      <main className="flex-1 md:ml-64 p-4 overflow-y-auto">
      <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Question for Quick poll</h1>

      {/* Create Poll */}
      <div className="mb-6 p-4 border rounded">
        <input
          type="text"
          placeholder="Poll Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        {options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[i] = e.target.value;
              setOptions(newOptions);
            }}
            className="w-full p-2 border rounded mb-2"
          />
        ))}
        <button
          onClick={() => setOptions([...options, ""])}
          className="px-3 py-1 bg-gray-300 rounded mr-2"
        >
          Add Option
        </button>
        <button
          onClick={createPoll}
          className="px-4 py-2 mt-5 bg-blue-500 text-white rounded"
        >
          Create Poll
        </button>
      </div>

      {/* Poll List */}
      {polls.map((poll) => (
        <div key={poll._id} className="p-4 border rounded mb-4">
          <h2 className="text-xl font-bold">{poll.question}</h2>
          {poll.options.map((option, i) => (
            <div key={i} className="flex items-center justify-between mt-2">
              <span>{option.text}</span>
              <div>
                <span className="mr-2">{option.votes} votes</span>
                <button
                  onClick={() => vote(poll._id, i)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Vote
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
      </main>
    </div>
  );
};

export default Dashboard;
