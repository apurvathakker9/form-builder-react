import moment from "moment";
import { generateID } from "./common";

const currentDateTime = moment().unix()*1000;

const DemoFormLayouts: any = [
  {
    id: generateID(),
    formName: "Regular POD Form",
    createdAt: currentDateTime,
    creator: "Test User",
    formLayoutComponents: [
      {
        container: {
          id: "xdb2ni4u0md3nflqc1qksy",
          controlName: "step-container",
          displayText: "Workflow Step",
          itemType: "container",
          icon: "fa fa-building",
          heading: "Dropoff Location",
          subHeading: "",
        },
        children: [
          {
            id: "dl0dduqw8s991yf8amgsm",
            controlName: "radio-group",
            displayText: "Radio",
            description: "Enter the dropoff location of the package",
            labelName: "Dropoff Location",
            itemType: "control",
            icon: "far fa-dot-circle",
            required: true,
            items: [
              {
                id: "56azek5q7i2m97yfbmw7j",
                value: "Front__-Door",
                label: "Front Door",
              },
              {
                id: "y1d6eq3231v2wsvs1ocy",
                value: "Back__-Door",
                label: "Back Door",
              },
              {
                id: "990tgqa51essjkas0gqzgs",
                value: "Package__-Locker",
                label: "Package Locker",
              },
            ],
            category: "other-elements",
            containerId: "xdb2ni4u0md3nflqc1qksy",
          },
        ],
      },
      {
        container: {
          id: "nyqlps3erjkgfng1rxgbvn",
          controlName: "step-container",
          displayText: "Workflow Step",
          itemType: "container",
          icon: "fa fa-building",
          heading: "Container Heading",
          subHeading: "Container SubHeading",
        },
        children: [
          {
            id: "h3qfythhwh5kbi9l5s0hrn",
            controlName: "image-upload",
            displayText: "Image",
            description: "",
            labelName: "Upload Image for POD",
            itemType: "control",
            icon: "far fa-image",
            required: true,
            category: "media-elements",
            containerId: "nyqlps3erjkgfng1rxgbvn",
          },
        ],
      },
    ],
    lastPublishedAt: 0,
    publishHistory: [],
    publishStatus: "draft",
    updatedAt: currentDateTime,
  },
  {
    id: generateID(),
    formName: "Legal Document Form",
    createdAt: currentDateTime,
    creator: "Test User",
    formLayoutComponents: [
      {
        container: {
          id: "xdb2ni4u0md3nflqc1qksy",
          controlName: "step-container",
          displayText: "Workflow Step",
          itemType: "container",
          icon: "fa fa-building",
          heading: "Dropoff Location",
          subHeading: "",
        },
        children: [
          {
            id: "mru48gcfqzxb34ifrdwpf",
            controlName: "signature",
            displayText: "Signature",
            description: "",
            labelName: "Customer Signature",
            itemType: "control",
            icon: "fa fa-signature",
            required: true,
            category: "other-elements",
            containerId: "xdb2ni4u0md3nflqc1qksy",
          },
        ],
      },
      {
        container: {
          id: "nyqlps3erjkgfng1rxgbvn",
          controlName: "step-container",
          displayText: "Workflow Step",
          itemType: "container",
          icon: "fa fa-building",
          heading: "Container Heading",
          subHeading: "Container SubHeading",
        },
        children: [
          {
            id: "h3qfythhwh5kbi9l5s0hrn",
            controlName: "image-upload",
            displayText: "Image",
            description: "",
            labelName: "Upload Image for POD",
            itemType: "control",
            icon: "far fa-image",
            required: true,
            category: "media-elements",
            containerId: "nyqlps3erjkgfng1rxgbvn",
          },
          {
            id: "n6kf3cyws39v2dyhu3dli",
            controlName: "multiline-text-field",
            displayText: "Notes",
            description: "Addional infomration",
            placeholder: "Write your notes here",
            labelName: "Notes",
            rows: 4,
            itemType: "control",
            icon: "far fa-file",
            required: false,
            category: "text-elements",
            containerId: "nyqlps3erjkgfng1rxgbvn",
            index: 0,
          },
        ],
      },
    ],
    lastPublishedAt: 0,
    publishHistory: [],
    publishStatus: "draft",
    updatedAt: currentDateTime,
  },
];

export default DemoFormLayouts;