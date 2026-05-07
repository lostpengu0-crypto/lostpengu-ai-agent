import { autonomousDecision } from "./autonomous";
import { saveMemory } from "./memory";

export async function startRuntime() {
  console.log("🐧 LostPengu Runtime Started");

  setInterval(async () => {
    const result = await autonomousDecision();

    console.log("🧠 Agent Thought:", result.thought);

    saveMemory(result.thought);
  }, 5000);
}
