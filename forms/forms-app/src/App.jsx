import { Input } from "./components/Input";
import { Heart } from "lucide-react";
import "./App.css";

export function App() {
  return (
    <form>
      <Input.Root placeholder="Placeholder" label="Label" tags="outline style-1 inputText default" type="text">
        <Input.Icon src={Heart}></Input.Icon>
      </Input.Root>
    </form>
  );
};