import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  function renderInputByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          {formControls.map((controlItem) => (
            <div className="grid w-full gap-1.5" key={controlItem.name}>
              <Label className="mb-1" htmlFor={controlItem.name}>
                {controlItem.label}
              </Label>
              {renderInputByComponentType(controlItem)}
            </div>
          ))}
        </div>
        <Button className="w-full mt-2" type="submit">
          {buttonText || "Submit"}
        </Button>
      </form>
    </>
  );
}

export default CommonForm;