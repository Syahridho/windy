import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

interface SkillCardProps {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

export default function SkillCard({ name, category, icon }: SkillCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white dark:bg-gray-800">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
        <div className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300">
          {icon || <Code className="w-12 h-12" />}
        </div>
        <div className="space-y-2 w-full">
          <h3 className="font-semibold text-base">{name}</h3>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
