export default function getResponse(news) {
  const legitResponses = [
    "The news looks legit, especially considering the information about RANDOM_SUBSTRING.",
    "Seems like a credible source, particularly due to the details about RANDOM_SUBSTRING.",
    "Looks authentic, especially with the specific mention of RANDOM_SUBSTRING.",
    "This news appears genuine, especially considering the evidence about RANDOM_SUBSTRING.",
    "It's probably accurate, especially given the details about RANDOM_SUBSTRING.",
    "The information seems reliable, particularly due to the facts about RANDOM_SUBSTRING.",
    "This looks like a valid report, especially with the specific reference to RANDOM_SUBSTRING.",
    "The news seems trustworthy, especially considering the credible sources mentioned regarding RANDOM_SUBSTRING.",
    "The source is reputable, especially with the extensive coverage of RANDOM_SUBSTRING.",
    "It looks like a well-researched piece, particularly given the comprehensive information about RANDOM_SUBSTRING.",
  ];

  const notLegitResponses = [
    "This news looks like fake news or spam, especially with the suspicious details about RANDOM_SUBSTRING.",
    "It seems unreliable, particularly due to the lack of substantial information about RANDOM_SUBSTRING.",
    "Doubtful of the authenticity, especially considering the lack of evidence regarding RANDOM_SUBSTRING.",
    "Untrustworthy source, especially given the unclear references to RANDOM_SUBSTRING.",
    "The news might be misleading, particularly due to the lack of reliable information about RANDOM_SUBSTRING.",
    "This appears to be false information, especially considering the contradictory details about RANDOM_SUBSTRING.",
    "It's likely to be a hoax, especially given the lack of credible sources regarding RANDOM_SUBSTRING.",
    "This news seems fishy, especially with the vague information about RANDOM_SUBSTRING.",
    "Cannot be considered credible, especially with the absence of verifiable details about RANDOM_SUBSTRING.",
    "The source is dubious, especially given the unverified claims regarding RANDOM_SUBSTRING.",
  ];

  const randomResponses = [...legitResponses, ...notLegitResponses];

  // Extract a random substring from the input news
  const startIndex = Math.floor(Math.random() * news.length);
  const endIndex =
    startIndex + Math.floor(Math.random() * (news.length - startIndex));
  const randomSubstring = news.substring(startIndex, endIndex + 1);

  const result =
    randomResponses[Math.floor(Math.random() * randomResponses.length)];

  // Replaces the placeholder "RANDOM_SUBSTRING" with the actual random substring from the news.
  return result.replace("RANDOM_SUBSTRING", randomSubstring);
}
