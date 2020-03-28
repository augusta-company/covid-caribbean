import { LightSymptomps } from "./components/lightSymptoms"
import { MildSymptomps } from "./components/mildSymptoms"
import { ProvideCare } from "./components/provideCare"
import { CloseContact } from "./components/closeContact"
import { TravelOutside } from "./components/travelOutside"
import { MentalHealth } from "./components/mentalHealth"
import {
  UrgentWarning,
  MediumWarning,
  MentalWarning,
  LightWarning,
  Isolate10Warning,
  Isolate14Warning,
  SelfMonitor,
  NoSymptoms,
} from "./components/warnings"

const replaceItems = (array, index, obj) => {
  return [...array.slice(0, index), obj]
}

export default function(state, action) {
  switch (action.type) {
    case "UrgentWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: UrgentWarning,
        }),
        symptoms: state.symptoms,
      }
    case "MediumWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MediumWarning,
        }),
        symptoms: state.symptoms,
      }
    case "LightWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: LightWarning,
        }),
        symptoms: true,
      }
    case "MildSymptomps":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MildSymptomps,
        }),
        symptoms: state.symptoms,
      }
    case "LightSymptomps":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: LightSymptomps,
        }),
        symptoms: state.symptoms,
      }
    case "ProvideCare":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: ProvideCare,
        }),
        symptoms: state.symptoms,
      }
    case "TravelOutside":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: TravelOutside,
        }),
        symptoms: false,
      }
    case "CloseContact":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: CloseContact,
        }),
        symptoms: state.symptoms,
      }
    case "Isolate10Warning":
    case "Isolate10Warning-yes":
    case "Isolate10Warning-no":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: Isolate10Warning,
        }),
        symptoms: state.symptoms,
      }
    case "Isolate14Warning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: Isolate14Warning,
        }),
        symptoms: state.symptoms,
      }
    case "SelfMonitor":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: SelfMonitor,
        }),
        symptoms: state.symptoms,
      }
    case "NoSymptoms":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: NoSymptoms,
        }),
        symptoms: state.symptoms,
      }
    case "MentalHealth":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MentalHealth,
        }),
        symptoms: state.symptoms,
      }
    case "MentalWarning":
      return {
        items: replaceItems(state.items, action.index, {
          flag: action.type,
          cmp: MentalWarning,
        }),
        symptoms: state.symptoms,
      }
    default:
      return { items: replaceItems([...state.items]) }
  }
}
