import {
  siReact,
  siTypescript,
  siJavascript,
  siRedux,
  siTailwindcss,
  siZod,
  siReactquery,
  siNodedotjs,
  siExpress,
  siFastapi,
  siFlask,
  siAxios,
  siJsonwebtokens,
  siMongodb,
  siPostgresql,
  siMysql,
  siSqlite,
  siSupabase,
  siFirebase,
  siGooglegemini,
  siHuggingface,
  siScikitlearn,
  siPandas,
  siNumpy,
  siGit,
  siGithub,
  siDocker,
  siPostman,
  siVercel,
  siRender,
  siNetlify,
  siAndroidstudio,
  siHtml5,
  siCss,
  siPython,
  siOpenjdk,
  siWordpress,
  siVite,
  siChartdotjs,
  siLeaflet,
} from "simple-icons";

/**
 * Monochrome brand icons for skill pills. Skills that are concepts rather
 * than tools (Hooks, REST APIs, RAG, ...) intentionally have no icon and
 * render as text-only pills.
 */
const icons: Record<string, { path: string; title: string }> = {
  React: siReact,
  "React Native": siReact,
  Hooks: siReact,
  "Context API": siReact,
  TypeScript: siTypescript,
  "JavaScript (ES6+)": siJavascript,
  "Redux Toolkit": siRedux,
  "TanStack Query": siReactquery,
  Zod: siZod,
  "Tailwind CSS": siTailwindcss,
  Vite: siVite,
  "Chart.js": siChartdotjs,
  Leaflet: siLeaflet,
  "Node.js": siNodedotjs,
  Express: siExpress,
  FastAPI: siFastapi,
  Flask: siFlask,
  Axios: siAxios,
  "JWT authentication": siJsonwebtokens,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  SQLite: siSqlite,
  Supabase: siSupabase,
  Firebase: siFirebase,
  "Google Gemini": siGooglegemini,
  "Hugging Face": siHuggingface,
  "Scikit-learn": siScikitlearn,
  Pandas: siPandas,
  NumPy: siNumpy,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  Postman: siPostman,
  Vercel: siVercel,
  Render: siRender,
  Netlify: siNetlify,
  "Android Studio": siAndroidstudio,
  HTML5: siHtml5,
  CSS3: siCss,
  Python: siPython,
  Java: siOpenjdk,
  "WordPress theme development": siWordpress,
};

export default function SkillIcon({ name }: { name: string }) {
  const icon = icons[name];
  if (!icon) return null;

  return (
    <svg
      className="skill-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
