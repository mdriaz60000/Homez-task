import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLater = () => {
  return (
    <div className="text-center flex flex-col items-center gap-4 py-10">
      <div>
        <p className="text-2xl font-semibold">Subscribe Our Newsletter</p>
        <p className="text-muted-foreground text-sm">
          We don’t send spam, so don’t worry.
        </p>
      </div>

      <form className="w-full max-w-md">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            className="pr-28 rounded-md py-5"
          />
          <Button
            type="submit"
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md h-8 text-sm px-3"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsLater;
