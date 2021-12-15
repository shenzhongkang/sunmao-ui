import "@arco-design/web-react/dist/css/arco.css";
import { Registry } from "@sunmao-ui/runtime/lib/services/registry";
import { Button } from "./components/Button";
import { Header, Content, Footer, Sider, Layout } from "./components/Layout";
import { Image } from "./components/Image";
import { Select } from "./components/Select";
import { Menu } from "./components/Menu";
import { Dropdown } from "./components/Dropdown";
import { Space } from "./components/Space";
import { Input } from "./components/Input";

type Component = Parameters<Registry["registerComponent"]>[0];
type Trait = Parameters<Registry["registerTrait"]>[0];
type Module = Parameters<Registry["registerModule"]>[0];

const components: Component[] = [
  Button,
  Header,
  Content,
  Footer,
  Sider,
  Layout,
  Image,
  Select,
  Menu,
  Dropdown,
  Space,
  Input,
];
const traits: Trait[] = [];
const modules: Module[] = [];

export function install(registry: Registry) {
  components.forEach((c) => registry.registerComponent(c));
  traits.forEach((t) => registry.registerTrait(t));
  modules.forEach((m) => registry.registerModule(m));
}
