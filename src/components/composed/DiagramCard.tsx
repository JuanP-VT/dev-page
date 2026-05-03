import { Card } from "../ui/card";
import MermaidDiagram from "./MermaidDiagram";

type Props = {
  title: string;
  chart: string;
};
export function DiagramCard({ title, chart }: Props) {
  return (
    <div className="flex flex-col mb-12">
      <h2 className="text-2xl font-bold case-gradient-text mb-2">{title}</h2>
      <Card>
        <MermaidDiagram chart={chart} />
      </Card>
    </div>
  );
}
