import { Card } from "../ui/card";
import MermaidDiagram from "./MermaidDiagram";

type Props = {
  title: string;
  chart: string;
};
export function DiagramCard({ title, chart }: Props) {
  return (
    <div className="flex flex-col mb-12">
      <h2 className="mb-2 text-2xl font-bold case-gradient-text">{title}</h2>
      <Card className="bg-slate-50 dark:bg-slate-800 shadow-xl">
        <MermaidDiagram chart={chart} />
      </Card>
    </div>
  );
}
