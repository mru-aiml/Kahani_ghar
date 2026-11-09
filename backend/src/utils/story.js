export function serializeStory(story) {
  const value = story.toObject ? story.toObject() : story;
  return {
    id: String(value._id),
    title: value.title,
    language: value.language,
    kind: value.kind,
    ageBand: value.ageBand,
    childNickname: value.child.nickname,
    interests: value.child.interests,
    narrator: value.narrator,
    structure: value.structure,
    createdAt: new Date(value.createdAt).toISOString()
  };
}
