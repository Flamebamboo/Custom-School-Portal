import { Card } from "./Card";

export function QuickAccessCard({ title, icon: Icon, href }) {
  return (
    <Card className="group transition-colors hover:border-primary">
      <a href={href} className="block p-6">
        <div className="flex flex-col items-center text-center gap-4">
          <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
          <h3 className="font-medium text-primary">{title}</h3>
        </div>
      </a>
    </Card>
  );
}
