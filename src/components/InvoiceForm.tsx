import { useState } from "react";
import { ChevronLeft, Heart, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const InvoiceForm = () => {
  const [showInvoiceInfo, setShowInvoiceInfo] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-[1400px]">
        <Button variant="ghost" size="sm" className="mb-6 text-primary hover:text-primary px-2">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        <div className="flex gap-6 items-start">
          <Card className="flex-1 p-8 border border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-normal text-foreground">Submit an Invoice Inquiry</h1>
              <Heart className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>

            <p className="text-sm text-destructive mb-6">* Indicates required</p>

            <div className="space-y-5">
              <div>
                <Label htmlFor="entity" className="text-sm font-normal flex items-center gap-1">
                  <span className="text-destructive">*</span> Entity{" "}
                  <Info className="h-3.5 w-3.5 text-muted-foreground" />
                </Label>
                <div className="mt-1.5">
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Quick Guide - Entity Selection
                    <X className="h-3.5 w-3.5" />
                  </a>
                </div>
                <Select>
                  <SelectTrigger className="mt-2 bg-card h-9">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="entity1">Entity 1</SelectItem>
                    <SelectItem value="entity2">Entity 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="invoice" className="text-sm font-normal flex items-center gap-1">
                  Invoice number{" "}
                  <Info className="h-3.5 w-3.5 text-muted-foreground" />
                </Label>
                {showInvoiceInfo && (
                  <div className="mt-2 p-3 bg-muted/50 border border-border rounded flex items-start justify-between text-sm">
                    <p className="text-foreground flex-1 text-sm leading-relaxed">
                      If there are multiple invoice numbers, please use the 'Description' field or upload an Excel file containing all the invoice numbers as an attachment.
                    </p>
                    <button onClick={() => setShowInvoiceInfo(false)} className="ml-2">
                      <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                )}
                <Input id="invoice" className="mt-2 bg-card h-9" />
              </div>

              <div>
                <Label htmlFor="supplier" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Supplier
                </Label>
                <Input id="supplier" className="mt-2 bg-card h-9" />
              </div>

              <div>
                <Label htmlFor="supplierList" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Is Supplier in the List?
                </Label>
                <Select defaultValue="yes">
                  <SelectTrigger className="mt-2 bg-card h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="inquiryType" className="text-sm font-normal flex items-center gap-1">
                  <span className="text-destructive">*</span> Inquiry Type{" "}
                  <Info className="h-3.5 w-3.5 text-muted-foreground" />
                </Label>
                <div className="mt-1.5">
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Quick Guide - Inquiry Types
                    <X className="h-3.5 w-3.5" />
                  </a>
                </div>
                <Select>
                  <SelectTrigger className="mt-2 bg-card h-9">
                    <SelectValue placeholder="-- None --" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    <SelectItem value="type1">Type 1</SelectItem>
                    <SelectItem value="type2">Type 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-normal">
                  <span className="text-destructive">*</span> Description
                </Label>
                <div className="mt-2 border border-input rounded bg-card">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-border">
                    <select className="text-sm border-none bg-transparent text-foreground outline-none">
                      <option>Paragraph</option>
                    </select>
                    <div className="h-5 w-px bg-border" />
                    <button className="p-1.5 hover:bg-muted rounded text-sm">
                      <span className="font-bold">B</span>
                    </button>
                    <button className="p-1.5 hover:bg-muted rounded text-sm">
                      <span className="italic">I</span>
                    </button>
                    <div className="h-5 w-px bg-border" />
                    <button className="p-1.5 hover:bg-muted rounded text-sm">≡</button>
                    <button className="p-1.5 hover:bg-muted rounded text-sm">≡</button>
                    <button className="p-1.5 hover:bg-muted rounded text-sm">≡</button>
                    <button className="p-1.5 hover:bg-muted rounded text-sm">≡</button>
                    <div className="h-5 w-px bg-border" />
                    <button className="p-1.5 hover:bg-muted rounded text-sm">•</button>
                    <button className="p-1.5 hover:bg-muted rounded text-sm">1.</button>
                  </div>
                  <Textarea 
                    id="description" 
                    className="min-h-[180px] border-none focus-visible:ring-0 resize-none" 
                  />
                </div>
              </div>
            </div>
          </Card>

          <div className="w-[200px] flex-shrink-0">
            <Card className="p-4 border border-border bg-card">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-10 rounded-md font-medium">
                Submit
              </Button>
            </Card>

            <Card className="p-4 border border-border bg-card mt-4">
              <div className="border-t-2 border-accent mb-4" />
              
              <h3 className="font-medium text-foreground mb-3 text-sm">Required information</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Entity
                </span>
                <span className="px-2.5 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Supplier
                </span>
                <span className="px-2.5 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Inquiry Type
                </span>
                <span className="px-2.5 py-1 text-xs border border-info-badge text-info-badge rounded">
                  Description
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
