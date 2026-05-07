type MemoryEntry = {
  thought: string;
  timestamp: string;
};

const memory: MemoryEntry[] = [];

export function saveMemory(thought: string) {
  memory.push({
    thought,
    timestamp: new Date().toISOString(),
  });
}

export function getMemories() {
  return memory;
}
