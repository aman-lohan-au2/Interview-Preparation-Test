var CustomCounter = function(min, max) {
    this.min = min.slice(0)
    this.max = max.slice(0)
    this.curr = this.min.slice(0)
    this.length = this.min.length
}

CustomCounter.prototype.increment = function() {
    for (var i = this.length - 1, ii = 0; i >= ii; i--) {
        this.curr[i] += 1
        if (this.curr[i] > this.max[i]) {
            this.curr[i] = 0
        } else {
            break
        }
    }
}

CustomCounter.prototype.is_max = function() {
    for (var i = 0, ii = this.length; i < ii; ++i) {
        if (this.curr[i] !== this.max[i]) {
            return false
        }
    }
    return true
}

var PhoneNumber = function(phone_number) {
    this.phone_number = phone_number
    this.combinations = []
}

PhoneNumber.number_to_combinations = {
    1: ['1']
  , 2: ['2', 'a', 'b', 'c']
  , 3: ['3', 'd', 'e', 'f']
  , 4: ['4', 'g', 'h', 'i']
  , 5: ['5', 'j', 'k', 'l']
  , 6: ['6', 'm', 'n', 'o']
  , 7: ['7', 'p', 'q', 'r', 's']
  , 8: ['8', 't', 'u', 'v']
  , 9: ['9', 'w', 'x', 'y', 'z']
  , 0: ['0', '+']
}

PhoneNumber.prototype.get_combination_by_digit = function(digit) {
    return PhoneNumber.number_to_combinations[digit]
}

PhoneNumber.prototype.add_combination_by_indexes = function(indexes) {
    var combination = ''
    for (var i = 0, ii = indexes.length; i < ii; ++i) {
        var phone_number_digit = this.phone_number[i]
        combination += this.get_combination_by_digit(phone_number_digit)[indexes[i]]
    }

    this.combinations.push(combination)
}

PhoneNumber.prototype.update_combinations = function() {
    var min_indexes = []
      , max_indexes = []

    for (var i = 0, ii = this.phone_number.length; i < ii; ++i) {
        var digit = this.phone_number[i]
        min_indexes.push(0)
        max_indexes.push(this.get_combination_by_digit(digit).length - 1)
    }

    var c = new CustomCounter(min_indexes, max_indexes)

    while(true) {
        this.add_combination_by_indexes(c.curr)
        c.increment()

        if (c.is_max()) {
            this.add_combination_by_indexes(c.curr)
            break
        }
    }
}

var phone_number = new PhoneNumber('42')
phone_number.update_combinations()
console.log(phone_number.combinations)