export const surveyJson = {
  showQuestionNumbers: "off",
  completeText: "Submit",
  pages: [
    {
      name: "personalInfo",
      navigationTitle: "Basic",
      elements: [
        { type: "text", name: "firstName", title: "First Name", isRequired: true },
        { type: "text", name: "middleName", title: "Middle Name (optional)" },
        { type: "text", name: "lastName", title: "Last Name", isRequired: true },
        { type: "text", name: "mobileNumber", title: "Mobile Number (optional)", inputType: "tel" },
        { type: "text", inputType: "email", name: "emailAddress", title: "Email Address (optional)" },
      ],
    },
    {
      name: "additionalInfo",
      navigationTitle: "Additional",
      elements: [
        { type: "text", name: "age", title: "Age", isRequired: true },
        { type: "text", name: "occupation", title: "Occupation (optional)" },
        { type: "text", name: "hobbies", title: "Hobbies (optional)" },
      ],
    },
    {
      name: "addressInfo",
      navigationTitle: "Address",
      elements: [
        { type: "text", name: "street", title: "Street Address", isRequired: true },
        { type: "text", name: "city", title: "City", isRequired: true },
        { type: "text", name: "state", title: "State" },
        { type: "text", name: "zipcode", title: "ZIP Code", inputType: "number" },
      ],
    },
  ],
};

export const customCss = {
  root: "max-w-lg mx-auto px-4",
  container: "!px-0",
  header: "mb-8",
  headerText: "text-xl font-medium text-gray-900",
  navigationContainer: "border-b-2 border-gray-200 mb-6",
  navigationButton: {
    root: "flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none",
    selected: "!text-emerald-600 border-b-2 border-emerald-500 -mb-[2px]",
  },
  body: "!p-0",
  question: {
    root: "mb-4",
    title: "block text-sm font-medium text-black mb-1",
    content: "mt-1",
  },
};
