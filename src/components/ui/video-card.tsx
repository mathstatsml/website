import Giscus from "@giscus/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/primitives/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/primitives/tabs";
import { type VideoNodeDataDefinition } from "~/types/cytoscape-elements";

export const VideoCard = ({
  id,
  label,
  parent,
  tier,
  type,
  author,
  link,
  tags,
}: VideoNodeDataDefinition) => {
  const convertLinkToEmbedUrl = (link: string) => {
    const videoId = link.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
  };

  return (
    <Tabs defaultValue="video" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="video">Video</TabsTrigger>
        <TabsTrigger value="discussion">Discussion</TabsTrigger>
      </TabsList>
      <TabsContent value="video">
        <Card>
          <CardHeader>
            <CardTitle>{label}</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              className="w-full"
              src={convertLinkToEmbedUrl(link)}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </CardContent>
          <CardFooter>
            <button>Save changes</button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="discussion">
        <Card>
          <CardContent>
            <Giscus
              id="comments"
              repo="mathstatsml/discussion"
              repoId="R_kgDOOBs4ug"
              category="General"
              categoryId="DIC_kwDOOBs4us4CneTT"
              strict="1"
              mapping="specific"
              term={id}
              reactionsEnabled="1"
              emitMetadata="0"
              theme="light"
              lang="en"
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
