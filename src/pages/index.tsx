import type { NextPage } from "next";
import FeaturedPost from "../components/FeaturedPost";

const fakePost = {
  id: 45,
  editor: {
    id: 29,
    name: "Daniel Bonifacio",
    avatarUrls: {
      default:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
      small:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
      medium:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
      large:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
    },
    createdAt: "2017-03-04T00:12:45Z",
  },
  slug: "como-fazer-x-coisas-com-react-js",
  title: "Como fazer X coisas com React.js",
  imageUrls: {
    default:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
    small:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
    medium:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
    large:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
  },
  body: "Olá, hoje eu vou **mostrar** a como fazer X coisas com `react.js`\n",
  tags: ["JavaScript", "react", "redux"],
  createdAt: "2017-03-04T00:12:45-03:00",
  earnings: {
    pricePerWord: 0.06,
    words: 2429,
    totalAmount: 145.74,
  },
  published: true,
  updatedAt: "2020-03-04T00:12:45-03:00Z",
  updatedBy: {
    id: 29,
    name: "Daniel Bonifacio",
    avatarUrls: {
      default:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
      small:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
      medium:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
      large:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
    },
  },
  canBePublished: true,
  canBeUnpublished: true,
  canBeDeleted: true,
  canBeEdited: true,
};

const Home: NextPage = () => {
  return (
    <div>
      <h2>Olá mundo</h2>
      <FeaturedPost postSummary={fakePost} />
    </div>
  );
};

export default Home;
