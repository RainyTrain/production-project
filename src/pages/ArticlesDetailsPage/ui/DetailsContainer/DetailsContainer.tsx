import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { Card } from "shared/ui/Redesigned/Card";

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer = ({ className }: DetailsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  return (
    <Card fulllWidth className={className} padding="24">
      <ArticleDetails id={id!} />
    </Card>
  );
};
