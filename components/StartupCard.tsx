import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AuthorType = {
  _id: number;
  name: string;
  username: string;
  image?: string; // Optional if not always present
};

type StartupCardType = {
  _id: number;
  createdAt: string;
  views: number;
  author: AuthorType;
  title: string;
  description: string;
  category: string;
  image: string;
};

type Props = {
  post: StartupCardType;
};

const StartupCard: React.FC<Props> = ({ post }) => {
  const { _id, createdAt, views, author, title, description, category, image } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author._id}`}>
            <p className="text-16-medium line-clamp-1">{author.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        {author.image && (
          <Link href={`/user/${author._id}`}>
            <Image
              src={author.image}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          </Link>
        )}
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="startup" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
