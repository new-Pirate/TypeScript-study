enum QuestStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

async function getFlags(req: {
  topicId: number, 
  status: QuestStatus
}): Promise<{
  question: string, answer: string, tags: string[], likes: number, status: string
}[]> {
  const res = await fetch('/flags', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await res.json();
  return data;
}