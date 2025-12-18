// src/pages/StoryDetail.tsx
import { useParams, Link } from "react-router-dom";
import KrishnaSudamaComic from "./KrishnaSudamaComic";
import RaniLakshmibaiComic from "./RaniLakshmibaiComic.tsx";
import RamayanaComic from "./RamayanaComic";

type BasicStory = {
  title: string;
  content: string;
};

const basicStories: Record<string, BasicStory> = {
  // ready to add more simple text stories later
};

const storyConfigs: {
  [key: string]:
    | { title: string; component: React.ComponentType }
    | BasicStory;
} = {
  krishna: {
    title: "Krishna & Sudama",
    component: KrishnaSudamaComic,
  },
  lakshmibai: {
    title: "Rani Lakshmibai",
    component: RaniLakshmibaiComic,
  },
  ramayana: {
    title: "Ramayana",
    component: RamayanaComic,
  },
  // spread basicStories if needed later
};

const StoryDetail = () => {
  const { id } = useParams();
  const story = id ? storyConfigs[id] : undefined;

  if (!story) {
    return (
      <div className="min-h-screen py-20 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-red-600">
          Story Not Found
        </h1>
        <Link
          to="/stories"
          className="inline-block mt-8 text-red-600 font-semibold hover:underline"
        >
          ← Back to Stories
        </Link>
      </div>
    );
  }

  if ("component" in story) {
    const StoryComponent = story.component;
    return <StoryComponent />;
  }

  return (
    <div className="min-h-screen py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        {story.title}
      </h1>

      <p className="text-lg text-slate-700 leading-relaxed">
        {story.content}
      </p>

      <Link
        to="/stories"
        className="inline-block mt-8 text-orange-600 font-semibold"
      >
        ← Back to Stories
      </Link>
    </div>
  );
};

export default StoryDetail;
